import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Catches render-time errors so the app shows a visible error message
 * instead of a blank white page.
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "#0a0a0a",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            fontFamily: "Inter, system-ui, sans-serif",
            textAlign: "center",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(225,6,0,0.5)",
              borderRadius: 12,
              padding: "2rem",
              maxWidth: 600,
              background: "rgba(20,20,20,0.8)",
            }}
          >
            <h1 style={{ color: "#e10600", fontFamily: "Orbitron, sans-serif", fontSize: "1.5rem", marginBottom: "1rem" }}>
              F1 Dashboard — Render Error
            </h1>
            <p style={{ color: "#ccc", marginBottom: "1rem", fontSize: "0.95rem" }}>
              Something went wrong while rendering the page.
            </p>
            <pre
              style={{
                color: "#ff8a84",
                fontSize: "0.8rem",
                textAlign: "left",
                overflow: "auto",
                maxHeight: 240,
                background: "#111",
                padding: "1rem",
                borderRadius: 8,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {this.state.error?.message ?? "Unknown error"}
              {this.state.error?.stack ? `\n\n${this.state.error.stack}` : ""}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: "1.5rem",
                background: "#e10600",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "0.65rem 1.5rem",
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                cursor: "pointer",
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
