<script setup>

</script>

<template>
  <section class="container">

    <header>
      <a href="index.html">
        <img src="@/assets/files/historyHeader.gif" alt="HUMIS project"/>
      </a>

      <img src="@/assets/files/histBooks01.jpg" alt="Books on a table"/>
    </header>

    <section class="middle">
      <div class="left-side">
        <nav class="left-nav">
          <a href="about-us.html" class="active">About us</a>
          <a href="#">Faculty &amp; staff</a>
          <a href="#">Undergraduate students</a>
          <a href="#">Graduate students</a>
          <a href="#">Courses &amp; syllabi</a>
          <a href="#">News &amp; announcements</a>
          <a href="#">Friends &amp; alumni</a>
          <a href="contact-us.html">Contact us</a>
        </nav>

        <div class="login-links">
          <img src="@/assets/files/login-cis.gif" alt="Log into CIS"/>
          <img src="@/assets/files/login-humis.gif" alt="Log into HUMIS"/>
        </div>
      </div>

      <section class="inner">

        <nav class="drop-down-menu">
          Navigate:

          <label for="major-navigation">
            <select name="major-navigation" id="major-navigation">
              <option value="about-us.html">About us</option>
              <option value="#">Faculty &amp; staff</option>
              <option value="#">Undergraduate students</option>
              <option value="#">Graduate students</option>
              <option value="#">Courses &amp; syllabi</option>
              <option value="#">News &amp; announcements</option>
              <option value="#">Friends &amp; alumni</option>
              <option value="#">Contact us</option>
            </select>
          </label>
        </nav>

        <nav class="minor top">
          <a href="#">Campus directory</a>
          <a href="#">Department calendar</a>
          <a href="contact-us.html">Contact us</a>

          <a href="#">
            <img src="@/assets/files/u_small.gif" alt="U of U Logo"/>
          </a>
        </nav>

        <main>
          <slot></slot>
        </main>

        <nav class="minor bottom">
          <a href="#">Disclaimer</a>
          <a href="#">Text only</a>
          <a href="#">Webmaster</a>
        </nav>

      </section>
    </section>

    <footer>
      380 SOUTH 1400 EAST | 211 C HALL | SALT LAKE CIT Y | UT | 84112 | PHONE 801.581.6121 | FAX 801.585.0580
    </footer>

  </section>

</template>

<style scoped>
section.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 780px;

  header {
    img {
      width: 100%;
      display: block;
    }
  }

  section.middle {
    /*height: 100%;*/
    display: flex;
    flex-direction: column;

    div.left-side {
      display: none;
    }

    section.inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /*height: 100%;*/

      nav.drop-down-menu {
        display: flex;
        gap: 20px;
        justify-content: center;
        background-color: var(--grey-light);
        padding: 20px 10px;
        order: -1;

        label {
          display: flex;

          select {
            width: 100%;
          }
        }
      }

      nav.minor {
        display: flex;
        justify-content: center;
        font-size: 10px;
        align-items: center;

        a {
          color: var(--black);
          border-right: 1px solid black;
          padding-right: 5px;
          margin-right: 5px;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }

          img {
            vertical-align: middle;
          }

          &:last-of-type {
            border-right: none;
          }

          &.active {
            text-decoration: underline;
          }
        }

        &.top {
          text-transform: uppercase;
          margin-top: 5px;
          order: -2;
        }

        &.bottom {
          text-transform: lowercase;
          margin-bottom: 5px;
        }
      }

      main {
        padding: 30px;
      }
    }
  }

  footer {
    color: white;
    background-color: var(--engDeptGreen);
    text-align: center;
    padding: 10px;
    font-size: 10px;
  }


  /* Tablet and up overrides */
  @media screen and (width >= 600px) {
    section.middle {
      flex-direction: row;

      div.left-side {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30%;
        background-color: var(--grey-light);
        border-right: 2px solid var(--green-light);
        padding-bottom: 20px;

        nav.left-nav {
          margin: 20px 20px 0;

          a {
            display: block;
            text-transform: uppercase;
            font-size: 10px;
            color: var(--black);
            border-bottom: 2px solid var(--engDeptGreen);
            text-decoration: none;
            padding: 10px 0 10px 10px;

            &:hover {
              background-color: var(--engDeptGreen);
              color: #fff;
            }

            &.active {
              font-weight: bold;
              font-size: 12px;
            }
          }
        }

        div.login-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
      }

      section.inner {
        width: 70%;

        nav.drop-down-menu {
          display: none;
        }

        nav.minor {
          justify-content: flex-end;
        }

        main {
          min-height: 500px;
        }
      }
    }
  }
}
</style>