'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Questions = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const [questions, setQuestions] = useState<
    {
      serialNo: number;
      title: string;
      difficulty: string;
      acceptanceRatio: string;
    }[]
  >([]);

  const init = async () => {
    if (!session) {
      router.push('/');
    }
    const response = await fetch(`api/questions`, {
      method: 'GET',
    });

    const json = await response.json();
    setQuestions(json);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className='flex min-h-screen min-w-full flex-col bg-slate-800'>
      <h1 className='min-w-full p-10 text-center text-4xl text-[#28A0F1]'>
        Problems
      </h1>

      <table className='m-4 table-auto bg-slate-900 text-left leading-10 text-white'>
        <thead className='text-[#28A0F1]'>
          <tr>
            <th className='pl-4'>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
        </thead>

        <tbody>
          {questions &&
            questions.map((question) => (
              <tr className='odd:bg-slate-700 even:bg-slate-600'>
                <Link href={`/questions/${question.serialNo}`}>
                  <td className='pl-4'>{`${question.serialNo}. ${question.title}`}</td>
                </Link>
                <td
                  className={
                    question.difficulty === 'Easy'
                      ? 'text-green-400'
                      : question.difficulty === 'Medium'
                      ? 'text-orange-400'
                      : 'text-red-400'
                  }
                >
                  {question.difficulty}
                </td>
                <td>{question.acceptanceRatio}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Questions;
