# Security Policy

## Supported Versions

We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it to us as soon as possible.

**Do not** open a public issue for security vulnerabilities.

### How to Report

1. Email your findings to [security@jcraft.com](mailto:security@jcraft.com) (replace with actual email)
2. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- Acknowledgment of your report within 48 hours
- Updates on the status of the fix every 1-2 weeks
- Credit for the discovery (if desired) in the public disclosure

### Timeline

We aim to address critical vulnerabilities within 30 days of acknowledgment. Less critical issues will be addressed in the next scheduled release.

## Security Best Practices

### For Contributors

- Always use the latest dependencies
- Run `pnpm audit` before submitting pull requests
- Follow secure coding practices
- Validate and sanitize all inputs
- Use environment variables for secrets, never hardcode them

### Dependency Management

- Regularly update dependencies
- Monitor for security advisories
- Use `npm audit` or `pnpm audit` to check for vulnerabilities
- Review new dependencies before adding them
