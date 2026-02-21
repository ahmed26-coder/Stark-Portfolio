import React from 'react';
import { supabase } from '@/lib/supabase';
import PortfolioDetails from '@/components/layouts/portfolio/portfolio-details';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !project) {
    return notFound();
  }

  return <PortfolioDetails project={project} />;
}

