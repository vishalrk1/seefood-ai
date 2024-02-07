function separateParagraph(paragraph: string) {
  const sections = paragraph.split("\n\n");
  const ingredientIndex = sections.findIndex((section) =>
    section.startsWith("Ingredients:")
  );
  const instructionIndex = sections.findIndex((section) =>
    section.startsWith("Instructions:")
  );
  const servingIndex = sections.findIndex((section) =>
    section.startsWith("Serving")
  );
  const calorieIndex = sections.findIndex((section) =>
    section.startsWith("Protein Breakdown:")
  );
  const descriptionIndex = sections.findIndex((section) =>
    section.startsWith("Description:")
  );

  const extractPoints = (section: string) => {
    return section
      .split("\n")
      .slice(1)
      .map((point) => point.trim());
  };

  const ingredients = extractPoints(sections[ingredientIndex]);
  const instructions = extractPoints(sections[instructionIndex]);
  const serving = sections[servingIndex].split(": ").slice(1).join("\n").trim();
  const calorieBreakdown = extractPoints(sections[calorieIndex]).map((point) =>
    point.replace(/^\s*[-\w]+:\s*/, "")
  );
  const description = sections[descriptionIndex]
    .split("\n")
    .slice(1)
    .join("\n")
    .trim();

  return { ingredients, instructions, serving, calorieBreakdown, description };
}
