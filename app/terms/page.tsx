"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from '@/lib/i18n';

export default function TermsOfService() {
  const { t } = useTranslation();
  
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-8 flex items-center">
        <Link href="/" className="mr-4 inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('common.returnHome')}
        </Link>
      </div>
      
      <Card className="mb-8">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold">{t('terms.title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-8">
            {t('terms.introduction')}
          </p>
        </CardContent>
      </Card>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>1. {t('terms.section1.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('terms.section1.description')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>2. {t('terms.section2.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {t('terms.section2.description')}
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>PetSync:</strong> {t('terms.section2.item1')}</li>
              <li><strong>PetMatch:</strong> {t('terms.section2.item2')}</li>
              <li><strong>AdopTrack:</strong> {t('terms.section2.item3')}</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>3. {t('terms.section3.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('terms.section3.description')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>4. {t('terms.section4.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('terms.section4.description')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>5. {t('terms.section5.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {t('terms.section5.description')}
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>{t('terms.section5.item1')}</li>
              <li>{t('terms.section5.item2')}</li>
              <li>{t('terms.section5.item3')}</li>
              <li>{t('terms.section5.item4')}</li>
              <li>{t('terms.section5.item5')}</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>6. {t('terms.section6.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('terms.section6.description')} <Link href="/privacy" className="text-primary hover:underline">{t('terms.section6.link')}</Link>.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>7. {t('terms.section7.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('terms.section7.description')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>8. {t('terms.section8.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('terms.section8.description')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>9. {t('terms.section9.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('terms.section9.description')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>10. {t('terms.section10.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('terms.section10.description')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>11. {t('terms.section11.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('terms.section11.description')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>12. {t('terms.section12.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('terms.section12.description')} <a href="mailto:legal@hackapet.org" className="text-primary hover:underline">legal@hackapet.org</a>.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/" className="text-primary hover:underline">
          {t('common.returnHome')}
        </Link>
        <Separator className="my-4" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hackapet. {t('footer.copyright')}
        </p>
      </div>
    </div>
  );
}