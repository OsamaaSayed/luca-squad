import Header from '@/components/shared/Header';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <section className=' '>
      <Header
        bgImage='/images/vacancies/vacancies-bg.jpg'
        title='Vacancies'
      ></Header>
    </section>
  );
}
