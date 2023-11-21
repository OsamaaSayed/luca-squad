import ServiceBox from "./components/ServiceBox";
import ContactBox from "./components/ContactBox";
import Subscribe from "./components/Subscribe";

import { contacts, services } from "@/constants";

export default function Home() {
  return (
    <main>
      <section
        style={{ backgroundImage: `url('/images/home/hero.jpg')` }}
        className="min-h-screen bg-cover bg-center bg-no-repeat"
      ></section>

      <section>
        <div className="container mx-auto">
          <div className="my-16">Shared Component</div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-6">
            {services.map((item) => (
              <ServiceBox key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="flex items-center gap-6">
            {contacts.map((item) => (
              <ContactBox key={item.title} item={item} />
            ))}

            <Subscribe />
          </div>
        </div>
      </section>
    </main>
  );
}
