import Header from '@/components/shared/Header';
import JobSummery from '../list/components/jobSummery';
import { useEffect, useState } from 'react';

async function getVacancyDetails(id: string) {
  const res = await fetch(
    `http://sbtechnology-001-site85.atempurl.com/api/Vacancies/GetVacancyDetailsById?vacancyId=${id}`,
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  // const [vacancyDetails, setVacancyDetails] = useState();
  // useEffect(  async () => {
  //   setVacancyDetails( await getVacancyDetails(id));
  // }, [])

  const id = params.id;
  const vacancyDetails = await getVacancyDetails(id);
  // let vacancyDetails;
  console.log('vacancy details', vacancyDetails);
  return (
    <section className=' w-full '>
      <Header
        bgImage='/images/vacancies/vacancies-bg.jpg'
        title='Vacancies'
      ></Header>

      <main className='  grid grid-cols-1 px-10 py-10 md:grid-cols-12'>
        <article className=' col-span-9 '>
          <main>
            <h1 className='text-2xl text-black'>
              {vacancyDetails.result?.titleEn}
            </h1>
            <p className='my-4  text-lg'>Who Are We Looking For</p>
            <div
              className='text[#7A7A7A] text-lg '
              dangerouslySetInnerHTML={{
                __html: vacancyDetails.result?.descriptionEn,
              }}
            ></div>
          </main>

          {/* <article className='mt-5'>
            <h1 className='text-xl text-black'>What You Will Be Doing</h1>
            <p>
              As a Financial Inclusion Sales Agent, your responsibilities
              include:
            </p>
            <ul>
              <li>Conducting customer outreach in underserved areas.</li>
              <li>
                Promoting and explaining financial products tailored to customer
                needs.
              </li>
              <li>
                Assisting clients in completing applications and ensuring a
                smooth process.
              </li>
              <li>Building and maintaining positive customer relationships.</li>
              <li>Achieving sales targets through effective strategies.</li>
              <li>
                Conducting training sessions to enhance financial literacy in
                the community.
              </li>
            </ul>
          </article>

          <article className='mt-5'>
            <h1 className='text-xl text-black'>Educational Requirement:</h1>
            <ul>
              <li>High school diploma or equivalent.</li>
              <li>
                Additional education in finance or related fields is
                advantageous.
              </li>
            </ul>
          </article>

          <article className='mt-5'>
            <h1 className='text-xl text-black'>Working Hours</h1>
            <ul>
              <li>9 AM - 6 PM</li>
            </ul>
          </article>
          <article className='mt-5'>
            <h1 className='text-xl text-black'>Working Days</h1>
            <ul>
              <li>
                Five days a week, with flexibility based on outreach schedules
                and community needs.
              </li>
            </ul>
          </article>

          <article className='mt-5'>
            <h1 className='text-xl text-black'>
              Perks & Benefits You Will Get:
            </h1>
            <ul>
              <li>Competitive salary with a commission structure.</li>
              <li>Opportunities for career growth and continuous learning.</li>
              <li>Contribution to a meaningful social cause.</li>
              <li>
                Compliance with regulatory requirements and adherence to company
                policies.
              </li>
              <li>
                A positive and collaborative work environment fostering personal
                and professional development.
              </li>
            </ul>
          </article> */}
        </article>
        <article className=' col-span-3'>
          <JobSummery
            vacancyDetails={vacancyDetails}
            id={id}
          />
        </article>
      </main>
    </section>
  );
}
