import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import type { ContentTrackerData } from '@/types/table'
import {
  type TrackerDetailsFormSchema,
  trackerDetailsFormSchema,
} from '@/validations/tracker-details'
import { SelectValue } from '@radix-ui/react-select'
import { Loader2Icon } from 'lucide-react'
import { toast } from 'sonner'

interface TrackerDetailsFormProps {
  data?: ContentTrackerData
  isUpdating?: boolean
  onSuccess: () => void
}

export function TrackerDetailsForm({
  isUpdating = false,
  data: initialData,
  onSuccess,
}: TrackerDetailsFormProps) {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TrackerDetailsFormSchema>({
    resolver: zodResolver(trackerDetailsFormSchema),
  })

  async function onSubmitForm(data: TrackerDetailsFormSchema) {
    const formData = new FormData()

    formData.append('header', data.header)
    formData.append('type', data.type)
    formData.append('status', data.status)
    formData.append('target', data.target.toString())
    formData.append('limit', data.limit.toString())
    formData.append('reviewer', data.reviewer)

    await new Promise(resolve => setTimeout(resolve, 3000))

    // action here...*
    // const { success, message } = await formAction(formData)

    // if (success === false && message) {
    //   toast.error(message)
    // }

    // if (success) {
    //   toast.success(message)

    //   if (!isUpdating) {
    //     reset()
    //   }
    // }
    toast.success('Tracker details saved successfully')
    onSuccess()
  }

  return (
    <form
      id="tracker-details-form"
      onSubmit={handleSubmit(onSubmitForm)}
      className="space-y-6 p-4 pb-0"
    >
      <article className="block space-y-3">
        <Label htmlFor="header">Header</Label>
        <Input
          id="header"
          type="text"
          placeholder="Header"
          defaultValue={initialData?.header}
          disabled={isSubmitting}
          {...register('header')}
        />

        {errors.header && (
          <p className="text-red-500 text-xs">{errors.header.message}</p>
        )}
      </article>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
        <article className="block space-y-3">
          <Label htmlFor="type">Type</Label>
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value ?? initialData?.type}
                disabled={isSubmitting}
              >
                <SelectTrigger id="type" className="w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Table of Contents">
                    Table of Contents
                  </SelectItem>

                  <SelectItem value="Executive Summary">
                    Executive Summary
                  </SelectItem>

                  <SelectItem value="Technical Approach">
                    Technical Approach
                  </SelectItem>

                  <SelectItem value="Design">Design</SelectItem>

                  <SelectItem value="Capabilities">Capabilities</SelectItem>

                  <SelectItem value="Focus Documents">
                    Focus Documents
                  </SelectItem>

                  <SelectItem value="Narrative">Narrative</SelectItem>

                  <SelectItem value="Cover Page">Cover Page</SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          {errors.type && (
            <p className="truncate text-red-500 text-xs">
              {errors.type.message}
            </p>
          )}
        </article>

        <article className="block space-y-3">
          <Label htmlFor="header">Status</Label>
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value ?? initialData?.status}
                disabled={isSubmitting}
              >
                <SelectTrigger id="status" className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Done">Done</SelectItem>
                  <SelectItem value="In Process">In Progress</SelectItem>
                  <SelectItem value="Not Started">Not Started</SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          {errors.status && (
            <p className="truncate text-red-500 text-xs">
              {errors.status.message}
            </p>
          )}
        </article>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
        <article className="block space-y-3">
          <Label htmlFor="target">Target</Label>
          <Input
            id="target"
            type="number"
            min={1}
            max={100}
            placeholder="Target"
            defaultValue={initialData?.target}
            disabled={isSubmitting}
            {...register('target', { valueAsNumber: true })}
          />

          {errors.target && (
            <p className="text-red-500 text-xs">{errors.target.message}</p>
          )}
        </article>

        <article className="block space-y-3">
          <Label htmlFor="limit">Limit</Label>
          <Input
            id="limit"
            type="number"
            min={1}
            max={50}
            placeholder="Limit"
            defaultValue={initialData?.limit}
            disabled={isSubmitting}
            {...register('limit', { valueAsNumber: true })}
          />

          {errors.limit && (
            <p className="text-red-500 text-xs">{errors.limit.message}</p>
          )}
        </article>
      </div>

      <article className="block space-y-3">
        <Label htmlFor="reviewer">Reviewer</Label>
        <Controller
          control={control}
          name="reviewer"
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value ?? initialData?.reviewer}
              disabled={isSubmitting}
            >
              <SelectTrigger id="reviewer" className="w-full">
                <SelectValue placeholder="Select reviewer" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>

                <SelectItem value="John Doe">John Doe</SelectItem>

                <SelectItem value="Emily Whalen">Emily Whalen</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        {errors.reviewer && (
          <p className="truncate text-red-500 text-xs">
            {errors.reviewer.message}
          </p>
        )}
      </article>

      <Button
        className="hidden md:inline-flex md:w-full"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          'Save tracker details'
        )}
      </Button>
    </form>
  )
}
