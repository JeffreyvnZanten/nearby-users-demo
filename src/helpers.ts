function capitalizeFirst(str: string): string {
  return str.replace(/^./, (c) => c.toUpperCase());
}

export { capitalizeFirst };
