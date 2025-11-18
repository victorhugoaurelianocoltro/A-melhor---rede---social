import type { Meta, StoryObj } from "@storybook/react"
import { Tag } from "./tag"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Modal } from "./modal"
import { useState } from "react"
import { Grid } from "./grid"
import { Button } from "./button"

const meta: Meta = {
  title: "UI/Misc",
}
export default meta

export const Chips: StoryObj = {
  render: () => (
    <div className="flex gap-2">
      <Tag>#design</Tag>
      <Tag>#ux</Tag>
      <Tag>#branding</Tag>
    </div>
  ),
}

export const Avatars: StoryObj = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
        <AvatarFallback>US</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=another" />
        <AvatarFallback>AN</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const ModalExample: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <div className="p-6">Hello from Modal</div>
        </Modal>
      </div>
    )
  },
}

export const GridExample: StoryObj = {
  render: () => (
    <Grid>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="rounded-md border bg-card p-6">Item {i + 1}</div>
      ))}
    </Grid>
  ),
}
