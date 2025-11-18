import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
}
export default meta

export const Example: StoryObj<typeof Card> = {
  render: () => (
    <Card style={{ width: 320 }}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </CardContent>
    </Card>
  ),
}
