'use client';
import { useEffect, useState } from 'react';

const Question = ({ params }: { params: { id: string } }) => {
  type Example = {
    exampleSerialNo: number;
    input: string;
    output: string;
    explanation: string;
  };

  type Ques = {
    serialNo: number;
    title: string;
    difficulty: string;
    acceptanceRatio: string;
    description: string;
    examples: Example[];
  };

  const [question, setQuestion] = useState<Ques>();

  const init = async () => {
    const response = await fetch(`../api/questions/${params.id}`, {
      method: 'GET',
    });

    const json = await response.json();
    setQuestion(json);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className='flex min-h-screen flex-col bg-slate-800 sm:min-w-full'>
      <div className='flex min-h-full min-w-full flex-row items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='2.5'
          stroke='white'
          className='mt-2 h-6 w-6 hover:stroke-[4px]'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
        <h1 className='min-w-fit p-10 text-center text-4xl text-white'>
          Problem List
        </h1>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='2.5'
          stroke='white'
          className='mt-2 h-6 w-6 hover:stroke-[4px]'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </div>

      <div className='flex flex-grow bg-slate-900'>
        <div className='m-1 flex w-[50%] flex-col rounded-sm bg-slate-800'>
          <div className='rounded-[0.25rem_0.25rem_0_0] bg-slate-300 bg-opacity-20 p-2 text-white'>
            Description
          </div>
          <div className=''>
            <div className='m-2 text-white'>
              {question ? `${question.serialNo}. ${question.title}` : ''}
            </div>
            <div
              className={
                question && question.difficulty === 'Easy'
                  ? 'm-2 w-fit rounded-xl bg-opacity-20 p-[0.2rem_0.4rem] bg-green-300 text-green-400'
                  : question && question.difficulty === 'Medium'
                  ? 'm-2 w-fit rounded-xl bg-opacity-20 p-[0.2rem_0.4rem] bg-orange-300 text-orange-400'
                  : 'm-2 w-fit rounded-xl bg-opacity-20 p-[0.2rem_0.4rem] bg-red-300 text-red-400'
              }
            >
              {question ? `${question.difficulty}` : ''}
            </div>
            <div className='m-2 italic leading-8 text-white'>
              {question ? `${question.description}` : ''}
            </div>

            {question &&
              question.examples.map((example) => (
                <>
                  <div className='m-2 text-white'>{`Example: ${example.exampleSerialNo}`}</div>
                  <div className='m-2 flex flex-col rounded-sm bg-slate-300 bg-opacity-10'>
                    <div className='ml-2 flex flex-row'>
                      <div className='font-semibold text-white'>Input:</div>
                      <div className='ml-2 text-white opacity-50'>
                        {example.input}
                      </div>
                    </div>
                    <div className='ml-2 flex flex-row'>
                      <div className='font-semibold text-white'>Output:</div>
                      <div className='ml-2 text-white opacity-50'>
                        {example.output}
                      </div>
                    </div>
                    <div className='ml-2 flex flex-row'>
                      <div className='font-semibold text-white'>
                        Explanation:
                      </div>
                      <div className='mb-2 ml-2 text-white opacity-50'>
                        {example.explanation}
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>

        <div className='m-1 flex w-[50%] flex-col justify-normal rounded-sm'>
          <div className='rounded-[0.25rem_0.25rem_0_0] bg-slate-300 bg-opacity-20 p-2 text-white'>
            Code
          </div>
          <div className='m-[0.5rem_0] flex-grow'>
            <textarea
              name='codearea'
              placeholder='Write your code here'
              id='codearea'
              className='border-box h-[100%] w-[100%] bg-slate-800 p-2 text-white placeholder:opacity-50'
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <div className='w-fit rounded bg-green-500 p-2 text-white'>
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
