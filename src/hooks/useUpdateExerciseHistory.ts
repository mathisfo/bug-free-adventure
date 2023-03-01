import { contextProps } from "@trpc/react-query/shared";
import { useState, useEffect } from "react";

import { api } from "../utils/api";

export const useUpdateExerciseHistory = (
  learnerAnalytics: any,
  selectedId: string | undefined
) => {
  const ctx = api.useContext();
  const mutation = api.userRouter.updateExerciseHistory.useMutation({
    onSuccess: () => {
      ctx.userRouter.getLastUnfinishedActivity.refetch();
    },
  });

  const [previousData, setPreviousData] =
    useState<typeof learnerAnalytics>(undefined);

  // This hook is used to set the previous data to the current data
  // when the current data is loaded. It is necesarry because we need to monitor when an exercise's successRate goes from 0 to >0.
  // This way we know when the user has completed the exercise.
  useEffect(() => {
    if (learnerAnalytics && previousData) {
      const allSelected = [
        ...learnerAnalytics.activityAnalytics.challenges,
        ...learnerAnalytics.activityAnalytics.coding,
        ...learnerAnalytics.activityAnalytics.examples,
      ];

      const allPrevious = [
        ...previousData.activityAnalytics.challenges,
        ...previousData.activityAnalytics.coding,
        ...previousData.activityAnalytics.examples,
      ];
      const selected = allSelected.find((act) => act.activityId === selectedId);
      const dataPrevious = allPrevious.find(
        (act) => act.activityId === selectedId
      );

      if (selected && dataPrevious) {
        if (
          dataPrevious.successRate === 0 &&
          selected.successRate > 0 &&
          selectedId
        ) {
          mutation.mutate({ activityId: selectedId });
        }

        if (
          dataPrevious.type === "EXAMPLE" &&
          selected.type === "EXAMPLE" &&
          dataPrevious.attempts === 0 &&
          selected.attempts > 0 &&
          selectedId
        ) {
          mutation.mutate({ activityId: selectedId });
        }
      }
    }
    setPreviousData(learnerAnalytics);
  }, [learnerAnalytics, mutation, previousData, selectedId]);
};
