import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const StoryCard = ({ story }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{story.title}</CardTitle>
        <CardDescription>{story.score} upvotes</CardDescription>
      </CardHeader>
      <CardContent>
        <Button as="a" href={story.url} target="_blank" rel="noopener noreferrer">
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};