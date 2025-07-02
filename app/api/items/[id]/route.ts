// app/api/items/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Dummy data (normally from database)
let dummyData = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  // Find item index
  const index = dummyData.findIndex((item) => item.id === id);
  if (index === -1) {
    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
  }

  // Remove the item
  dummyData.splice(index, 1);

  return NextResponse.json({ message: `Item ${id} deleted` }, { status: 200 });
}
