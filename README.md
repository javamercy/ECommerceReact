# E-Commerce React Application

## Commit Convention

This project follows the **Conventional Commits** specification, which is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history, making it easier to write automated tools on top of it.

### What is Conventional Commits?

Conventional Commits is a specification for adding human and machine-readable meaning to commit messages. It defines a structured format that makes it easier to:

- Generate automated changelogs
- Determine semantic version bumps automatically
- Communicate the nature of changes to teammates and other stakeholders
- Trigger build and publish processes
- Make it easier for people to contribute to your projects

### Conventional Commits Structure

A commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

1. **Type**: Indicates the kind of change being made (e.g., feat, fix)
2. **Scope**: Optional information about which part of the codebase is affected
3. **Description**: A short summary of the changes in imperative mood
4. **Body**: Optional detailed description of the changes
5. **Footer**: Optional section for referencing issues, breaking changes, etc.

### Detailed Breakdown of Commit Types

Each commit type serves a specific purpose in communicating the nature of changes:

#### Common Types

- **feat**: A new feature

  ```
  feat: add user registration functionality
  feat(auth): implement OAuth login with Google
  ```

- **fix**: A bug fix

  ```
  fix: resolve crash when empty search is performed
  fix(checkout): prevent duplicate order submissions
  ```

- **docs**: Documentation only changes

  ```
  docs: update installation instructions
  docs(api): add detailed descriptions for all endpoints
  ```

- **style**: Changes that do not affect the meaning of the code

  ```
  style: format code according to style guide
  style(components): apply consistent indentation
  ```

- **refactor**: A code change that neither fixes a bug nor adds a feature

  ```
  refactor: simplify product filtering logic
  refactor(cart): reorganize state management
  ```

- **perf**: A code change that improves performance

  ```
  perf: optimize image loading sequence
  perf(search): implement query result caching
  ```

- **test**: Adding missing tests or correcting existing tests

  ```
  test: add unit tests for product service
  test(auth): improve coverage for authentication flows
  ```

- **build**: Changes that affect the build system or external dependencies

  ```
  build: upgrade to React 18
  build(deps): update all dependencies to latest versions
  ```

- **ci**: Changes to CI configuration files and scripts

  ```
  ci: add GitHub Actions workflow
  ci(deploy): configure automatic deployment to staging
  ```

- **chore**: Other changes that don't modify src or test files
  ```
  chore: update .gitignore file
  chore(release): prepare 1.2.0 release
  ```

### Optional Components in Detail

#### Scope

The scope provides additional contextual information about which part of the codebase is being affected:

```
feat(ui): add new button component
fix(api): correct response format in user endpoint
refactor(cart): simplify checkout process
```

#### Body

The body provides detailed information about the changes and the reasoning behind them:

```
feat(auth): implement password reset functionality

The password reset flow now includes:
- Email verification
- Secure token generation
- Mobile-responsive reset form
- Comprehensive error handling

This addresses user feedback regarding account recovery options.
```

#### Footer

The footer is used for referencing issues and noting breaking changes:

##### Issue References

```
fix(payment): resolve credit card validation error

Closes #123
Resolves #456
```

##### Breaking Changes

```
feat(api): revise user authentication endpoints

BREAKING CHANGE: The authentication endpoints now use JWT tokens instead of session cookies. Clients need to update their authentication handling.
```

##### Multiple Footers

```
feat(products): implement new filtering system

This change adds advanced filtering capabilities to the product catalog,
including multi-select filters and saved filter preferences.

Closes #789

BREAKING CHANGE: The filter query parameter format has changed.
Old format: ?filter=color:red
New format: ?filters[color]=red

Co-authored-by: Jane Smith <jane@example.com>
```

### Semantic Versioning Impact

Conventional Commits is designed to work with Semantic Versioning (SemVer):

- `fix:` commits correlate to PATCH releases (1.0.1)
- `feat:` commits correlate to MINOR releases (1.1.0)
- Commits with `BREAKING CHANGE:` in the footer correlate to MAJOR releases (2.0.0)

### Benefits of Using Conventional Commits

1. **Automatically generated changelogs**: Tools can parse commit messages to create detailed release notes
2. **Automatic versioning**: Semantic version bumps can be determined from commit messages
3. **Clear communication**: Team members can easily understand the nature and scope of changes
4. **Structured history**: Makes it easier to navigate project history and understand evolution
5. **Triggers build and publish processes**: Automate workflows based on commit types
6. **Makes it easier for people to contribute**: Provides clear guidelines for contributors

### Practical Examples

#### Complete Examples with All Components

```
feat(shopping-cart): implement persistent cart storage

The shopping cart now automatically saves items between sessions using
localStorage. Cart items persist across page refreshes and browser restarts.

This change includes:
- Automatic saving of cart state on modifications
- Recovery of previous cart on page load
- Conflict resolution when logged-in user has both server and local carts

Closes #234
Resolves #345

BREAKING CHANGE: The cart storage format has changed, which may require
a one-time migration for users with existing carts.
```

```
fix(checkout): prevent duplicate order submissions

Added form submission locking mechanism to prevent users from
accidentally submitting the same order multiple times by clicking
the "Place Order" button repeatedly.

This fix addresses a critical issue that was causing duplicate
charges for some customers.

Fixes #567
```

### How to Follow This Standard

When making commits in this project, please use the appropriate prefix followed by a concise description:

1. Choose the appropriate type prefix from the list above
2. Add an optional scope in parentheses for additional context
3. Use the imperative mood in the description ("add" not "added")
4. Keep the first line under 72 characters
5. Separate the body with a blank line if more detail is needed
6. Include issue references and breaking change notices in the footer

### Tools to Help

- **Commitizen**: Command line utility that helps format commits according to the convention
- **commitlint**: Linter that can be used to enforce conventional commit messages
- **standard-version**: Utility for versioning, tagging, and changelog generation

For more information, visit [Conventional Commits](https://www.conventionalcommits.org/).
