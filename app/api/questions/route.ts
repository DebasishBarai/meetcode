import { NextResponse } from 'next/server';
import Questions from '../../../lib/Questions';

export async function GET(request: Request) {
  return NextResponse.json(
    Questions.map((question) => {
      return {
        serialNo: question.serialNo,
        title: question.title,
        difficulty: question.difficulty,
        acceptanceRatio: question.acceptanceRatio,
      };
    })
  );
}
