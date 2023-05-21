import { NextResponse } from 'next/server';
import Questions from '../../../../lib/Questions';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const queryQuestion = Questions.find(
    (question) => question.serialNo.toString() === params.id
  );
  if (!queryQuestion) {
    return NextResponse.json({
      serialNo: params.id,
      msg: 'Question not found',
    });
  }
  return NextResponse.json(queryQuestion);
}
