# Home

## This page will welcome users, prompting for a nickname if they don't already have one (if this is a new installation in the cell or if there is not a name in localstorage)

-- Home --

  <!-- -- Login asking for username and image -- / -- Welcome message --
    -- Redirects once a nickname has been established, either to a new domain or to view habits -->

    - Login
     - Top (header)
     - Middle (prompt)
     - Bottom
      - Validation/Loading alert
      - Form
       - Input for username
       - Input for image
       - Submit Button
     OR
    - Welcome
      - Top
       - Acknowledge current domain and ask for selection or to create new --> Habit-Traverser
       OR
       - Explain need for a domain and prompt to create --> Dashboard

    - Light/Dark mode toggle button

# Layout

## This page will wrap all other pages, with a top navbar, collapsible to the left-side.

-- Layout(Dashboard) --

  <!-- -- Asks for a first life domain -- / -- Lists life domains for selection --
  -- Redirects to habit-traverser once a domain has been created/picked -->

- Domain List (not paginated as there is an upper bound)
  - Domain cards 1..n
    - -- ...
  - Domain cards 1..n

OR

- Modal(
  DomainCreationForm
  )

-- Layout(Habit-Traverser) --

  <!-- -- Asks for a first habit -- // -- Shows the full habit tree (must be loaded first)
  -- Allows th -->

- Vis(
  - HabitWindowSelectionWidget (non-empty)
  - HabitTree
    )
    OR
- Modal (
  - HabitWindowSelectionWidget (empty)
  - HabitCreationForm
    )
