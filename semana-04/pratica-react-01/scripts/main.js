const rootElement = document.getElementById("root");

const Logo = () => (
  <div className="absolute left-0 py-5 flex-shrink-0 lg:static">
    <a href="#">
      <span className="sr-only">Workflow</span>
      <svg className="h-8 w-auto" fill="none" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#A5F3FC"
          d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"
        />
      </svg>
    </a>
  </div>
);

const UserPhoto = ({ width, height }) => (
  <img
    className={`h-${height} w-${width} rounded-full`}
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    alt=""
  />
);

const UserMenuButton = () => (
  <div className="ml-4 relative flex-shrink-0">
    <div>
      <button
        type="button"
        className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true">
        <span className="sr-only">Open user menu</span>
        <UserPhoto width={8} height={8} />
      </button>
    </div>
  </div>
);

const OpenModalButton = ({ onClick }) => (
  <div className="absolute right-0 flex-shrink-0 lg:hidden">
    <button
      onClick={onClick} 
      type="button"
      className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
      aria-expanded="false">
      <span className="sr-only">Open main menu</span>

      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>

      <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
)

const NotificationsButton = ({ textColor }) => (
  <button
    type="button"
    className={`${textColor} flex-shrink-0 p-1 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white`}>
    <span className="sr-only">View notifications</span>
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  </button>
);

const Searchbar = () => (
  <div className="px-12 lg:px-0">
    <div className="max-w-xs mx-auto w-full lg:max-w-md">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative text-white focus-within:text-gray-600">
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          id="search"
          className="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Search"
          type="search"
          name="search"
        />
      </div>
    </div>
  </div>
);

const ProfileOverview = () => {

  const dayOffList = [
    { days: 12, type: "Vacation" },
    { days: 4, type: "Sick" },
    { days: 2, type: "Personal" }
  ];

  const renderDayOfList = () => {
    return dayOffList.map(({ days, type }, index) => (
      <div key={index} className="px-6 py-5 text-sm font-medium text-center">
        <span className="text-gray-900">{days}</span>
        <span className="text-gray-600"> {type} days left</span>
      </div>
    ));
  }

  return (
    <section aria-labelledby="profile-overview-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <h2 className="sr-only" id="profile-overview-title">
          Profile Overview
        </h2>
        <div className="bg-white p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <UserPhoto width={20} height={20} />
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">Chelsea Hagon</p>
                <p className="text-sm font-medium text-gray-600">Human Resources Manager</p>
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0">
              <a
                href="#"
                className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                View profile{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {renderDayOfList()}
        </div>
      </div>
    </section>
  )
};

const ProfileQuickLink = ({ Icon, title, details }) => (
  <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
    <div>
      <Icon />
      <ArrowIcon />
    </div>
    <div className="mt-8">
      <h3 className="text-lg font-medium">
        <a href="#" className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true"></span>
          {title}
        </a>
      </h3>
      <p className="mt-2 text-sm text-gray-500">
        {details}
      </p>
    </div>
  </div>
);

const ProfileQuickLinks = () => {

  const quickLinks = [
    {
      Icon: ClockIcon,
      title: "Request time off",
      details: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    },
    {
      Icon: CheckIcon,
      title: "Benefits",
      details: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    },
    {
      Icon: PeopleIcon,
      title: "Schedule a one-on-one",
      details: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    },
    {
      Icon: MoneyIcon,
      title: "Payroll",
      details: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    },
    {
      Icon: TicketIcon,
      title: "Submit an expense",
      details: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    },
    {
      Icon: CapIcon,
      title: "Training",
      details: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    }
  ]

  const renderQuickLinks = () => {
    return quickLinks.map(({ ...info }, index) => (
      <ProfileQuickLink {...info} key={index} />
    ));
  };

  return (
    <section aria-labelledby="quick-links-title">
      <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        <h2 className="sr-only" id="quick-links-title">
          Quick links
        </h2>
        {renderQuickLinks()}
      </div>
    </section>
  )
};

const Profile = () => (
  <>
    <h1 className="sr-only">Profile</h1>
    <div className="grid grid-cols-1 gap-4 lg:col-span-2">
      <ProfileOverview />
      <ProfileQuickLinks />
    </div>
  </>
);

const Annoucement = ({ title, details }) => (
  <li className="py-5">
    <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
      <h3 className="text-sm font-semibold text-gray-800">
        <a href="#" className="hover:underline focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true"></span>
          {title}
        </a>
      </h3>
      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
        {details}
      </p>
    </div>
  </li>
);

const Announcements = () => {

  const announcements = [
    {
      title: "Office closed on July 2nd",
      details: "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores."
    },
    {
      title: "New password policy",
      details: "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia."
    },
    {
      title: "Office closed on July 2nd",
      details: "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi."
    }
  ];

  const renderAnnouncements = () => {
    return announcements.map(({ ...info }, index) => (
      <Annoucement {...info} key={index} />
    ));
  }

  return (
    <section aria-labelledby="announcements-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <div className="p-6">
          <h2 className="text-base font-medium text-gray-900" id="announcements-title">
            Announcements
          </h2>
          <div className="flow-root mt-6">
            <ul role="list" className="-my-5 divide-y divide-gray-200">
              {renderAnnouncements()}
            </ul>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              View all{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

const RecentHire = ({ imgUrl, name, user }) => (
  <li className="py-4">
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img
          className="h-8 w-8 rounded-full"
          src={imgUrl}
          alt={`${name}'s profile image`}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
        <p className="text-sm text-gray-500 truncate">{user}</p>
      </div>
      <div>
        <a
          href="#"
          className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
          View{" "}
        </a>
      </div>
    </div>
  </li>
);

const RecentHires = () => {

  const recentHires = [
    {
      imgUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Leonard Krasner",
      user: "@leonardkrasner"
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Floyd Miles",
      user: "@floydmiles"
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Emily Selman",
      user: "@emilyselman"
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Kristin Watson",
      user: "@kristinwatson"
    }
  ];

  const renderRecentHires = () => {
    return recentHires.map(({ ...info }, index) => (
      <RecentHire {...info} key={index} />
    ));
  };

  return (
    <section aria-labelledby="recent-hires-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <div className="p-6">
          <h2 className="text-base font-medium text-gray-900" id="recent-hires-title">
            Recent Hires
          </h2>
          <div className="flow-root mt-6">
            <ul role="list" className="-my-5 divide-y divide-gray-200">
              {renderRecentHires()}
            </ul>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              View all{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

const Sidebar = () => (
  <div className="grid grid-cols-1 gap-4">
    <Announcements />
    <RecentHires />
  </div>
);

const ModalWrapper = ({ children, closed }) => (
  closed ? null : ReactDOM.createPortal(children, document.getElementById("modal-root"))
);

const HeaderModal = ({ headerLinks, closed, closeModal }) => {

  const modalLinks = [
    { linkRef: "#", text: "Your Profile" },
    { linkRef: "#", text: "Settings" },
    { linkRef: "#", text: "Sign out" }
  ];

  const renderLinks = (links) => {
    return links.map(({ linkRef, text }, index) => (
      <a
        key={index}
        href={linkRef}
        className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">
        {text}
      </a>
    ));
  }

  const handleCloseClick = () => closeModal(true);

  return (
    <ModalWrapper closed={closed}>
      <div className="z-20 fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
      <div className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
          <div className="pt-3 pb-2">
            <div className="flex items-center justify-between px-4">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  onClick={handleCloseClick}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                  <span className="sr-only">Close menu</span>
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              {renderLinks(headerLinks)}
            </div>
          </div>
          <div className="pt-4 pb-2">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <UserPhoto width={10} height={10} />
              </div>
              <div className="ml-3 min-w-0 flex-1">
                <div className="text-base font-medium text-gray-800 truncate">Chelsea Hagon</div>
                <div className="text-sm font-medium text-gray-500 truncate">
                  chelsea.hagon@example.com
                </div>
              </div>
              <NotificationsButton textColor={"text-gray-400"} />
            </div>
            <div className="mt-3 px-2 space-y-1">
              {renderLinks(modalLinks)}
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
};

const Header = () => {

  const [modalClosed, setModalClosed] = React.useState(true);
  const headerLinks = [
    {
      text: "Home",
      linkRef: "/",
    },
    {
      text: "Profile",
      linkRef: "#",
    },
    {
      text: "Resources",
      linkRef: "#",
    },
    {
      text: "Company Directory",
      linkRef: "#",
    },
    {
      text: "Openings",
      linkRef: "#",
    }
  ];

  const renderHeaderLinks = () => {
    return headerLinks.map(({ linkRef, text }, index) => (
      <a
        key={index}
        href={linkRef}
        className="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10 first-of-type:text-white"
        aria-current="page">
        {" "}
        {text}{" "}
      </a>
    ));
  }

  const handleModalClick = () => setModalClosed(false);

  return (
    <header className="pb-24 bg-gradient-to-r from-sky-800 to-cyan-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
          <Logo />
          <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
            <NotificationsButton textColor={"text-cyan-200"} />
            <UserMenuButton />
          </div>

          <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
              <div className="hidden lg:block lg:col-span-2">
                <nav className="flex space-x-4">
                  {renderHeaderLinks()}
                </nav>
              </div>
              <Searchbar />
            </div>
          </div>
          <OpenModalButton onClick={handleModalClick} />
        </div>
      </div>

      <div className="lg:hidden">
        <HeaderModal headerLinks={headerLinks} closed={modalClosed} closeModal={setModalClosed} />
      </div>
    </header>
  )
};

const Main = () => (
  <main className="-mt-24 pb-8">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        <Profile />
        <Sidebar />
      </div>
    </div>
  </main>
);

const Footer = () => (
  <footer>
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
        <span className="block sm:inline">&copy; 2021 Tailwind Labs Inc.</span>{" "}
        <span className="block sm:inline">All rights reserved.</span>
      </div>
    </div>
  </footer>
);

const App = (
  <div className="min-h-full">
    <Header />
    <Main />
    <Footer />
  </div>
);

ReactDOM.render(App, rootElement);