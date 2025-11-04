import { Game } from "./_components/game";
import { ReviewsSection } from "./_components/reviews";
import { Showcase } from "./_components/showcase";
import { QuoteCard } from "./_components/quote";

export default function Home() {
  return (
    <main>
      <Showcase />
      {/* <ReviewsSection /> */}
      <Game />
      <QuoteCard />
    </main>
  );
}
