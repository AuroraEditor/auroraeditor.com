import "../../Assets/aurora/styles/aurora-style.css";
import "../../Assets/aurora/styles/aurora-dark-mode.css";
import "../../Assets/aurora/styles/aurora-overview.css";
import Aurora from "../../Assets/aurora/images/light/aurora_editor_light.jpg";
import AuroraCommands from "../../Assets/aurora/images/light/aurora_editor_command_palette_light.jpg";
import AuroraSourceControl from "../../Assets/aurora/images/light/aurora_editor_source_control_light.jpg";
import AuroraExtensions from "../../Assets/aurora/images/light/aurora_editor_extensions_light.jpg";
import AuroraDark from "../../Assets/aurora/images/dark/aurora_editor.jpg";
import AuroraCommandsDark from "../../Assets/aurora/images/dark/aurora_editor_command_palette.jpg";
import AuroraSourceControlDark from "../../Assets/aurora/images/dark/aurora_editor_source_control.jpg";
import AuroraExtensionsDark from "../../Assets/aurora/images/dark/aurora_editor_extensions.jpg";
import Socials from "../Components/Socials";

function Main() {
  return (
    <main id="main" className="main" role="main">
      <section className="section section-hero" id="part1" style={{}}>
        <div className="section-content">
          <div className="row">
            <div className="column large-centered large-10 text-center">
              <h1 className="typography-headline gradient-text">Aurora Editor Sunset Announcement</a>
              <p className="typography-intro">After much thought and consideration, we have decided to officially sunset Aurora Editor.<br>
              Aurora started as a community-driven effort to build a fast, lightweight, and truly native IDE for macOS developers. It grew out of passion, collaboration, and a shared vision for an open alternative. Along the way, contributors poured in their time, energy, and creativity to shape what Aurora became.<br>
              But as with all projects, there comes a time to reflect on sustainability and focus. With limited resources, shifting priorities, and new tools emerging in the developer ecosystem, we believe it’s the right moment to bring Aurora Editor’s journey to a graceful close.<br>
              The code will remain available on GitHub for anyone who wishes to explore, fork, or continue the vision in new directions. We deeply appreciate everyone who wrote code, opened issues, shared feedback, or simply used Aurora in their daily work-you kept the project alive and meaningful.<br>
              Thank you for being part of Aurora’s story!<br>
              Even though Aurora Editor is setting, the light it inspired will live on in the community.<br>
              <br>
              — The Aurora Editor Team (<a href='https://github.com/0xWDG'>@0xWDG</a> & <a href='https://github.com/nanashili'>@nanashili</a>).
              </p>
              <hr>
              <h1 className="typography-headline gradient-text">
                Aurora Editor
              </h1>
              <p className="typography-intro">
                <span className="nowrap">Aurora Editor</span> is an IDE built by
                the community, for the community, and written entirely in Swift
                for lightning-fast performance and a great feel on macOS.
              </p>
            </div>
          </div>
        </div>
        <figure className="device-hero device-macbook-pro-5th-gen-16-silver center">
          <picture className="dark device-screen">
            <source media="(max-width:735px)" srcSet={AuroraDark} />
            <source media="(max-width:1068px)" srcSet={AuroraDark} />
            <img src={AuroraDark} width="100%" alt="" aria-label="" />
          </picture>

          <picture className="light device-screen">
            <source media="(max-width:735px)" srcSet={Aurora} />
            <source media="(max-width:1068px)" srcSet={Aurora} />
            <img src={Aurora} width="100%" alt="" aria-label="" />
          </picture>
        </figure>
      </section>

      <section className="section section-lighter" style={{}}>
        <div className="section-content">
          <div className="row">
            <div className="column large-offset-1 large-10 small-offset-0">
              <h2 className="gradient-text">Lightweight and Fast</h2>
              <p>
                <span className="nowrap">Aurora Editor</span> lets you build
                your projects as quickly and smoothly as possible. It's not a
                replacement for Xcode but an extensible, superlight editor built
                on its fundamentals.
              </p>
              <p>
                Build your projects in your favorite programming languages with
                an editor that feels familiar, easy to navigate, and extensible
                with no limits.
              </p>
            </div>
            <div className="column large-offset-1 large-10 small-offset-0">
              <picture className="dark screen-only">
                <source
                  media="(max-width:1068px)"
                  srcSet={AuroraCommandsDark}
                />
                <img
                  src={AuroraCommandsDark}
                  width="100%"
                  alt=""
                  aria-label=""
                />
              </picture>

              <picture className="light screen-only">
                <source media="(max-width:1068px)" srcSet={AuroraCommands} />
                <img src={AuroraCommands} width="100%" alt="" aria-label="" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-multiplatform">
        <div className="section-content">
          <div className="row">
            <div className="column large-offset-1 large-10 small-offset-0">
              <h2 className="gradient-text">Integrated Version Control</h2>
              <p>
                <span className="nowrap">Aurora Editor</span> has built-in
                support for Git, no need to install a third-party extension.
              </p>
              <p>
                With support for multiple Git parties like{" "}
                <span className="nowrap">GitHub, Bitbucket and Gitlab</span>{" "}
                commiting and pushing your code without leaving the editor has
                never been easier.
              </p>
            </div>
            <div className="column large-offset-1 large-10 small-offset-0">
              <picture className="dark screen-only">
                <source
                  media="(max-width:1068px)"
                  srcSet={AuroraSourceControlDark}
                />
                <img
                  src={AuroraSourceControlDark}
                  width="100%"
                  alt=""
                  aria-label=""
                />
              </picture>

              <picture className="light screen-only">
                <source
                  media="(max-width:1068px)"
                  srcSet={AuroraSourceControl}
                />
                <img
                  src={AuroraSourceControl}
                  width="100%"
                  alt=""
                  aria-label=""
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-coding">
        <div className="section-content">
          <div className="row">
            <div className="column large-offset-1 large-10 small-offset-0">
              <h2 className="gradient-text">Extensible and Customizable</h2>
              <p>
                Want even more features? Install extensions to add new
                languages, themes, debuggers, and more. Extensions are run in
                separate processes, ensuring that they will have no impact on
                the editor's speed and performance.
              </p>
            </div>
            <div className="column large-offset-1 large-10 small-offset-0">
              <picture className="dark screen-only">
                <source
                  media="(max-width:1068px)"
                  srcSet={AuroraExtensionsDark}
                />
                <img
                  src={AuroraExtensionsDark}
                  width="100%"
                  alt=""
                  aria-label=""
                />
              </picture>
              <picture className="light screen-only">
                <source media="(max-width:1068px)" srcSet={AuroraExtensions} />
                <img src={AuroraExtensions} width="100%" alt="" aria-label="" />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <Socials />
    </main>
  );
}

export default Main;
