import { useState } from "react";
import { useSubscribeNewsletter } from "@/hooks/useNewsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email("Email inválido");

export const BlogNewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const subscribe = useSubscribeNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      emailSchema.parse(email);
      subscribe.mutate({ email }, {
        onSuccess: () => {
          setEmail("");
        }
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={subscribe.isPending}
        className={error ? "border-destructive" : ""}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
      <Button 
        type="submit" 
        className="w-full"
        disabled={subscribe.isPending}
      >
        <Mail className="mr-2 h-4 w-4" />
        {subscribe.isPending ? "Inscrevendo..." : "Inscrever"}
      </Button>
    </form>
  );
};
