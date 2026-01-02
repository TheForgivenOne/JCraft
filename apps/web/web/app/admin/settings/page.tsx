import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui/card';

export default function SettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin Settings</CardTitle>
        <CardDescription>Configure application settings</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Admin settings page content will go here.</p>
      </CardContent>
    </Card>
  );
}
