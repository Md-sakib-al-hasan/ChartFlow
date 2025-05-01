import { Button } from "@/components/ui/button"

export default function NewsletterSubscription() {
  return (
    <div className="w-full container mx-auto rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-12 md:py-16 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-semibold text-white">Ready to Hire Smarter?</h2>
          <p className="text-sm  text-white/90">Unlock Exclusive Insights Subscribe to Our Newsletter</p>
          <div>
            <Button
              className="bg-amber-100 hover:bg-amber-200 text-blue-900 font-medium px-8 py-2 rounded-full"
              variant="ghost"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
