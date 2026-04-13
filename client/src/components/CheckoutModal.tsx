import { useState } from "react";
import type { CartItem } from "@shared/schema";
import { calculateDHLShipping, estimatePackageWeight } from "@shared/shipping";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}: CheckoutModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Nederland",
    notes: "",
  });

  const subtotal = items.reduce((sum, item) => sum + item.product.priceEur * item.quantity, 0);
  const estimatedWeight = estimatePackageWeight(items);
  const shipping = calculateDHLShipping(estimatedWeight);
  const total = subtotal + shipping.price;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, items }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Bestelling mislukt");
      }

      toast({
        title: "Bestelling geplaatst!",
        description: `Uw orderbevestiging (${data.orderNumber}) is verzonden naar ${form.customerEmail}.`,
      });

      onOrderSuccess();
      onClose();
    } catch (error: any) {
      toast({
        title: "Fout bij plaatsen bestelling",
        description: error.message ?? "Probeer het opnieuw.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Bestelling afronden</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-1">
              <Label htmlFor="customerName">Naam *</Label>
              <Input
                id="customerName"
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
                required
                placeholder="Voor- en achternaam"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="customerEmail">E-mailadres *</Label>
              <Input
                id="customerEmail"
                name="customerEmail"
                type="email"
                value={form.customerEmail}
                onChange={handleChange}
                required
                placeholder="uw@email.nl"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="address">Straat en huisnummer *</Label>
              <Input
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                placeholder="Voorbeeldstraat 1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="postalCode">Postcode *</Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  required
                  placeholder="1234 AB"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="city">Stad *</Label>
                <Input
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  placeholder="Amsterdam"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="country">Land *</Label>
              <Input
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="notes">Opmerkingen</Label>
              <Textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Eventuele opmerkingen bij uw bestelling"
                rows={3}
              />
            </div>
          </div>

          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotaal:</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Verzending (DHL):</span>
              <span>€{shipping.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-base">
              <span>Totaal:</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1" disabled={isSubmitting}>
              Annuleren
            </Button>
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? "Bestelling plaatsen…" : "Bestelling plaatsen"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
