-- Add admin role to bdviajarpelomundo@gmail.com user
INSERT INTO public.user_roles (user_id, role)
VALUES ('2f0a6694-c8fd-4f70-bb0f-c8533d2b8f6f', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;