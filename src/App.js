import { Header } from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import { ReactComponent as InviteOnly } from "./assets/invite_only_landing.svg";
import { ReactComponent as HangingOut } from "./assets/hanging_out_easy_landing.svg";
import { ReactComponent as JustChilling } from "./assets/just_chiling_landing.svg";
import { ReactComponent as TinyStars } from "./assets/tiny_stars_landing.svg";
import { ReactComponent as Fandom } from "./assets/fandom_landing.svg";
import SectionJourney from "./components/Section-journey";
import Footer from "./components/footer";

function App(prop) {
  return (
    <div>
      <div className={`${prop.styleClass} bg-[#404eed]`}>
        <Header />
        <Main />
      </div>
      <Section
        image={<InviteOnly className="w-full h-full" />}
        heading="Create an invite-only place where you belong"
        text="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
      />
      <Section
        styleClass="bg-[#f6f6f6]"
        container="flex-row-reverse"
        image={<HangingOut className="w-full h-full" />}
        heading="Where hanging out is easy"
        text="Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
      />
      <Section
        image={<Fandom className="w-full h-full" />}
        heading="From few to a fandom"
        text="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
      />
      <SectionJourney
        stars={<TinyStars className="w-full h-full" />}
        journey={<JustChilling />}
        heading="RELIABLE TECH FOR STAYING CLOSE"
        text="Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share."
      />
      <Footer />
    </div>
  );
}

export default App;
