import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui/card';

export default function AnalyticsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics Dashboard</CardTitle>
        <CardDescription>
          View application metrics and analytics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Analytics dashboard content will go here.</p>
      </CardContent>
    </Card>
  );
}
