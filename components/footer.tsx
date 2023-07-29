export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-background border-t mt-auto">
      <div className="mx-auto py-10">
        <p className="text-center text-xs">
          &copy; {year} La Tienda, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
