export const likeMuffin = (muffinId: number) => ({
  type: "muffins/like",
  payload: { id: muffinId },
});
