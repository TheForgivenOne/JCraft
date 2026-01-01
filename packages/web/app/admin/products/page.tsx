import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui/card';

export default function ProductsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Products Management</CardTitle>
        <CardDescription>Manage product inventory and details</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Products management page content will go here.</p>
      </CardContent>
    </Card>
  );
}
