"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from '@/lib/i18n';

// Sample pet data
const petData = [
  {
    id: 1,
    name: 'Luna',
    type: 'Dog',
    breed: 'Mixed',
    age: '2 years',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    status: 'Available'
  },
  {
    id: 2,
    name: 'Oliver',
    type: 'Cat',
    breed: 'Siamese',
    age: '1 year',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    status: 'Available'
  },
  {
    id: 3,
    name: 'Max',
    type: 'Dog',
    breed: 'Labrador',
    age: '3 years',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    status: 'Pending'
  },
  {
    id: 4,
    name: 'Bella',
    type: 'Cat',
    breed: 'Persian',
    age: '4 years',
    image: 'https://images.unsplash.com/photo-1574144113084-b6f450cc5e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    status: 'Available'
  },
  {
    id: 5,
    name: 'Charlie',
    type: 'Dog',
    breed: 'Beagle',
    age: '2 years',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    status: 'Available'
  },
  {
    id: 6,
    name: 'Lucy',
    type: 'Cat',
    breed: 'Maine Coon',
    age: '1 year',
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    status: 'Adopted'
  }
];

export default function PetsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();
  
  const filteredPets = petData.filter(pet => 
    pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.breed.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-16 z-10 bg-background border-b">
        <div className="container flex items-center h-14 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-semibold flex-1 text-center">{t('pets.title')}</h1>
          <div className="w-5"></div> {/* Empty div for centering */}
        </div>
      </div>

      {/* Search Bar */}
      <div className="container px-4 py-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t('pets.searchPlaceholder')}
            className="pl-10 bg-muted/30"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Pet List */}
      <div className="flex-1 container px-4 py-6">
        <div className="space-y-4">
          {filteredPets.length > 0 ? (
            filteredPets.map((pet) => (
              <Card key={pet.id} className="overflow-hidden bg-white dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="relative h-24 w-24 flex-shrink-0">
                      <Image
                        src={pet.image}
                        alt={pet.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg">{pet.name}</h3>
                        <Badge 
                          variant={
                            pet.status === 'Available' ? 'default' : 
                            pet.status === 'Pending' ? 'secondary' : 
                            'outline'
                          }
                        >
                          {pet.status === 'Available' ? t('pets.status.available') : 
                           pet.status === 'Pending' ? t('pets.status.pending') : 
                           t('pets.status.adopted')}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{pet.breed} • {pet.age}</p>
                      <p className="text-sm text-muted-foreground mt-1">{pet.type === 'Dog' ? t('pets.type.dog') : t('pets.type.cat')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">{t('pets.noResults')}</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="sticky bottom-0 border-t bg-background py-2">
        <div className="container flex justify-around items-center">
          <Link href="/" className="flex flex-col items-center p-2 text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            <span className="text-xs mt-1">{t('navigation.home')}</span>
          </Link>
          
          <Link href="/pets" className="flex flex-col items-center p-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
              <path d="m22 22-6-6"></path>
            </svg>
            <span className="text-xs mt-1">{t('navigation.pets')}</span>
          </Link>
          
          <Link href="/expenses" className="flex flex-col items-center p-2 text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M3 3v18h18"></path>
              <path d="m19 9-5 5-4-4-3 3"></path>
            </svg>
            <span className="text-xs mt-1">{t('navigation.expenses')}</span>
          </Link>
          
          <Link href="/settings" className="flex flex-col items-center p-2 text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="text-xs mt-1">{t('navigation.settings')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}