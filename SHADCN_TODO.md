# Shadcn UI Components to Add

Based on the shadcn/ui documentation and common usage patterns, here are the components we should consider adding to the JCraft project:

## Essential Components
- [ ] Alert
- [ ] Alert Dialog
- [ ] Avatar
- [ ] Badge
- [ ] Checkbox
- [ ] Dialog
- [ ] Dropdown Menu
- [ ] Hover Card
- [ ] Input
- [ ] Label
- [ ] Popover
- [ ] Radio Group
- [ ] Select
- [ ] Separator
- [ ] Skeleton
- [ ] Switch
- [ ] Table
- [ ] Tabs
- [ ] Textarea
- [ ] Toast
- [ ] Toggle
- [ ] Tooltip

## Advanced Components
- [ ] Accordion
- [ ] Aspect Ratio
- [ ] Calendar
- [ ] Card
- [ ] Carousel
- [ ] Collapsible
- [ ] Command
- [ ] Context Menu
- [ ] Data Table
- [ ] Date Picker
- [ ] Dialog
- [ ] Drawer
- [ ] Form
- [ ] Menubar
- [ ] Navigation Menu
- [ ] Pagination
- [ ] Progress
- [ ] Resizable
- [ ] Scroll Area
- [ ] Sheet
- [ ] Skeleton
- [ ] Slider
- [ ] Sonner
- [ ] Spinner
- [ ] Theme Toggle
- [ ] Toggle Group
- [ ] Tree

## How to Add Components

To add components to the project, run the following command from the root of the project:

```bash
cd apps/web
npx shadcn-ui@latest add [component-name]
```

The CLI will automatically install the component to the correct location and update import paths.

## Configuration Notes

- The project is configured to use the "New York" style
- Tailwind CSS with CSS variables is enabled
- TypeScript is enabled
- Lucide React is used for icons
- The base color is "zinc"