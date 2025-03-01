"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from '@/lib/i18n';

export default function PrivacyPolicy() {
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
          <CardTitle className="text-3xl font-bold">{t('privacy.title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-8">
            {t('privacy.introduction')}
          </p>
        </CardContent>
      </Card>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('privacy.section1.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {t('privacy.section1.description')}
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>{t('privacy.section1.item1')}</li>
              <li>{t('privacy.section1.item2')}</li>
              <li>{t('privacy.section1.item3')}</li>
              <li>{t('privacy.section1.item4')}</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('privacy.section2.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {t('privacy.section2.description')}
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>{t('privacy.section2.item1')}</li>
              <li>{t('privacy.section2.item2')}</li>
              <li>{t('privacy.section2.item3')}</li>
              <li>{t('privacy.section2.item4')}</li>
              <li>{t('privacy.section2.item5')}</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('privacy.section3.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {t('privacy.section3.description')}
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>{t('privacy.section3.item1')}</li>
              <li>{t('privacy.section3.item2')}</li>
              <li>{t('privacy.section3.item3')}</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('privacy.section4.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('privacy.section4.description')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('privacy.section5.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('privacy.section5.description')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('privacy.section6.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('privacy.section6.description')}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('privacy.section7.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {t('privacy.section7.description')} <a href="mailto:privacy@hackapet.org" className="text-primary hover:underline">privacy@hackapet.org</a>.
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