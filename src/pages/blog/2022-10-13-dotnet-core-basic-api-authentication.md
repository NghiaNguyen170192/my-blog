---
layout: ../../layouts/BlogPostLayout.astro
title: "Basic .NET Core API Authentication"
description: "How to setup Authentication for .NET Core API project"
author: "Nghia Nguyen"
date: "13th Oct 2022"
pubDate: "13th Oct 2022"
tags: ["netcore", "api", "authentication", "jwt"]
categories: ["development"]
---

This is a tutorial to setup `JWT` authentication for netcore API.

In *Startup.cs* file, to enable JWT authentication from any identity provider, you add the following code.

```csharp

private readonly AuthenticationServerConfiguration _authenticationServerConfiguration;

public Startup(IConfiguration configuration, IWebHostEnvironment environment)
{
    _authenticationServerConfiguration = new AuthenticationServerConfiguration();
    _configuration.GetSection("AuthenticationServer").Bind(_authenticationServerConfiguration);
}
public void ConfigureService (IServiceCollection services)
{
    services.AddAuthorization();
    services
        .AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(options =>
        {
            //destination of authen server
            options.Authority = _authenticationServerConfiguration.Issuer;
            //destination of web api
            options.Audience = _authenticationServerConfiguration.Audience;
            options.RequireHttpsMetadata = true;
            options.TokenValidationParameters = GetTokenValidationParameters();
        });

    services.AddControllers();
    }
}

public void Configure(IApplicationBuilder app)
{
    app.UseHttpsRedirection();
    app.UseAuthentication();
    app.UseRouting();
    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
```

```csharp
private TokenValidationParameters GetTokenValidationParameters()
{
    return new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidIssuer = _authenticationServerConfiguration.Issuer,
        ValidateAudience = true,
        ValidAudience = _authenticationServerConfiguration.Audience,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = GetSecurityKey(),
        RequireExpirationTime = true,
        ValidateLifetime = true
    };
}


private SecurityKey GetSecurityKey()
{
    X509Certificate2 certificate = GetCertificate();
    return new X509SecurityKey(certificate);
}

private X509Certificate2 GetCertificate()
{
    string fileName = _authenticationServerConfiguration.CertificatePath;
    string password = _authenticationServerConfiguration.CertificatePassword;
    var certificate = new X509Certificate2(fileName, password, X509KeyStorageFlags.MachineKeySet);
    return certificate;
}
```

<br/>

Here is *AuthenticationServerConfiguration.cs* 
```csharp
public class AuthenticationServerConfiguration
{
    public string Audience { get; set; }
    public string CertificatePassword { get; set; }
    public string CertificatePath { get; set; }
    public string Issuer { get; set; }
    public string SecretKey { get; set; }
}
```

<br/>

In *appsettings.json*, add the following
```json
"AuthenticationServer": {
    "Audience": "netcore-api",
    "CertificatePassword": "certificate-password",
    "CertificatePath": "certificate-file-path",
    "Issuer": "https://issuer-url/", //issuer URL (Eg: https://localhost:6003/)
    "SecretKey": "your-secret-key"
}
```

<br/>

In *ApiController* or *ControllerBase*, you need to enable *Authorize()* attribute on the controller
```csharp
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
[Authorize(Roles = "user-role")]
public class AuthorizedBaseController : ControllerBase
{
}
```

That's it. This is the basic of using JWT authentication in .Net Core API.
