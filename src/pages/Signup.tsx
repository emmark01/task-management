import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Icons } from "../components/icons/Icons";
import { Input } from "../components/ui/Input";
import "./Auth.css";

export function SignupPage() {
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
        <h1>Claim a workspace</h1>
        <p>Start with a board, a handful of people, and one honest due date.</p>
        <form onSubmit={handleSubmit}>
          <Input label="Name" placeholder="Your name" required />
          <Input label="Work email" type="email" required />
          <Input label="Password" type="password" required />
          <Button type="submit">Create workspace</Button>
        </form>
        <p>
          Already have a seat? <Link to="/login">Sign in</Link>
        </p>
      </section>
      <aside>
        <blockquote>
          “Plan the week like a trail: a start, a ridge, and a way down.”
        </blockquote>
        <span>Northwood field note</span>
      </aside>
    </main>
  );
}
