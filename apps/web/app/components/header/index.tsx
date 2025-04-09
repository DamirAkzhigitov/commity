'use client';

import { env } from '@/env';
import { ModeToggle } from '@repo/design-system/components/mode-toggle';
import { Button } from '@repo/design-system/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@repo/design-system/components/ui/navigation-menu';
import { Menu, MoveRight, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import Image from 'next/image';
import Logo from './logo.svg';

export const Header = () => {
  const navigationItems = [
    {
      title: 'Features',
      href: '/features',
      description: '',
    },
    {
      title: 'Pricing',
      href: '/pricing',
      description: '',
    },
    {
      title: 'About',
      href: '/contact',
      description: '',
    },

  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-40 w-full bg-background">
      <div className="container relative mx-auto flex min-h-20 flex-row items-center justify-between gap-4 lg:grid lg:grid-cols-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
              src={Logo}
              alt="Logo"
              width={34}
              height={34}
          />
          <h1 className="text-3xl font-semibold">Commity</h1>
        </Link>
        <div className="hidden flex-row items-center justify-end gap-4 lg:flex">
          <NavigationMenu className="flex items-start justify-start">
            <NavigationMenuList className="flex flex-row justify-start gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Button variant="ghost" asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <ModeToggle />
                <Link className="text-2xl" href={`${env.NEXT_PUBLIC_APP_URL}/sign-in`}>Sign Up</Link>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex w-12 shrink items-end justify-end lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          {isOpen && (
            <div className="container absolute top-20 right-0 flex w-full flex-col gap-8 border-t bg-background py-4 shadow-lg">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between"
                      target={
                        item.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        item.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="h-4 w-4 stroke-1 text-muted-foreground" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
