import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui/card';

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders Management</CardTitle>
        <CardDescription>View and manage customer orders</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Orders management page content will go here.</p>
      </CardContent>
    </Card>
  );
}
