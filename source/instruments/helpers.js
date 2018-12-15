export const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
