import { ButtonPrimary } from '@/components/atoms/ButtonPrimary'
import { InputRadioCheckbox } from '@/components/atoms/InputRadioCheckbox'
import { Label } from '@/components/atoms/Label'

interface PropsInputTextarea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const InputTextarea = ({ className, ...props }: PropsInputTextarea) => {
  return (
    <textarea
      className={`block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200 ${className}`}
      {...props}
    />
  )
}

export const ExtraInformation = () => {
  return (
    <section className="flex flex-col gap-4 rounded-lg bg-white px-6 py-8 shadow-md md:px-12">
      <Label text="Aditional Description" className="font-semibold" fullWidth>
        <InputTextarea className="h-24 resize-none" />
      </Label>

      <Label
        text="How did you hear Machu Picchu Forless?"
        className="font-semibold"
        fullWidth
      >
        <InputTextarea className="h-24 resize-none" />
      </Label>

      <div>
        <Label
          text="Terms and conditions"
          className="font-semibold"
          textEnd
          row
          verticalCentered
        >
          <InputRadioCheckbox type="checkbox" required />
        </Label>
        <p className="ml-6 text-neutral-700">
          I accept{' '}
          <a href="#" className="text-blue-500 underline">
            reservation policies
          </a>
        </p>
      </div>

      <div className="flex justify-center">
        <ButtonPrimary type="submit">Send and Pay</ButtonPrimary>
      </div>
    </section>
  )
}
