import { Button } from '@repo/design-system/components/ui/button';
import BackgroundDecor from '@/app/(home)/components/backgroundDecor';

export const Hero = async () => {
  return (
    <section className="w-full">
      <div className="container mx-auto relative min-h-[750px] ">
        <div className="flex flex-col lg:flex-row items-center  justify-items-start gap-8 py-20 lg:py-40">
          <div className="flex-1 max-w-2xl z-20">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl  font-bold text-black dark:text-white leading-tight mb-6">
              AI-powered code <br /> assistant for your  <br />repositories
            </h1>
            <p className="text-lg lg:text-3xl text-foreground mb-8">
              Enhance your software development <br /> workflow with an AI assistant that <br />
              helps you write and manage code.
            </p>
            <Button size="lg" className="bg-red-500 text-white text-lg font-semibold">
              Get Started
            </Button>
          </div>
        </div>
        <BackgroundDecor />
      </div>
    </section>
  );
};
