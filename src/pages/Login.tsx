import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Icons } from "../components/icons/Icons";
import { Input } from "../components/ui/Input";
import "./Auth.css";

export function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <main className="nw-auth">
      <section className="nw-auth-panel">
        <div className="nw-brand">
          <Icons.tree />
          <strong>Northwood</strong>
        </div>
        <h1>Return to the cabin</h1>
        <p>Sign in to pick up the board, the trail log, and your due work.</p>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            defaultValue="mira@northwood.app"
            required
          />
          <Input
            label="Password"
            type="password"
            defaultValue="password"
            required
          />
          <Button type="submit">Enter workspace</Button>
        </form>
        <p>
          New here? <Link to="/signup">Create a seat</Link>
        </p>
      </section>
      <aside>
        <blockquote>
          “A quiet board is better than a noisy calendar.”
        </blockquote>
        <span>Northwood field note</span>
      </aside>
    </main>
  );
}
