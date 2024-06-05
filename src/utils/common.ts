export const handleCopyClipBoard = async (text: string) => {
 try {
  await navigator.clipboard.writeText(text);
  alert("copied");
 } catch (e) {
  alert("failed");
 }
};
