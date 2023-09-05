import OverImg from './components/OverImg/OverImg';
import TextSlide from './components/TextSlide/TextSlide';
import TinyText from './components/TinyText/TinyText';

export default function Hero() {
  return (
    <div className="relative w-full h-auto">
      <TinyText />
      <TextSlide />
      <OverImg />
    </div>
  );
}
