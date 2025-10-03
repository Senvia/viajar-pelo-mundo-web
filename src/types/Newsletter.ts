export interface NewsletterCampaign {
  id: string;
  title: string;
  subject: string;
  content: string;
  status: 'draft' | 'scheduled' | 'sent';
  scheduled_at: string | null;
  sent_at: string | null;
  recipients_count: number;
  opened_count: number;
  created_at: string;
  updated_at: string;
}
