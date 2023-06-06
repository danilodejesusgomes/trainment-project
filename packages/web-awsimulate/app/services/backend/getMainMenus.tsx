export interface MenuItem {
  title: string;
  spacing: boolean;
  submenu: MenuItem[];
}

const getMainMenus: MenuItem[] = [
  {
    title: "Dashboard",
    spacing: true,
    submenu: [],
  },
  {
    title: "Practice Exams",
    spacing: true,
    submenu: [
      {
        title: "AWS Certified Cloud Practitioner",
        spacing: false,
        submenu: [],
      },
      {
        title: "AWS Certified Solutions Architect Associate",
        spacing: true,
        submenu: [],
      },
      {
        title: "AWS Certified Solutions Architect Professional",
        spacing: true,
        submenu: [],
      },
    ],
  },
  {
    title: "Courses",
    spacing: false,
    submenu: [
      {
        title: "AWS Certified Cloud Practitioner",
        spacing: true,
        submenu: [],
      },
      {
        title: "AWS Certified Solutions Architect Associate",
        spacing: false,
        submenu: [],
      },
      {
        title: "AWS Certified Solutions Architect Professional",
        spacing: true,
        submenu: [],
      },
    ],
  },
  {
    title: "Profile",
    spacing: true,
    submenu: [],
  },
  {
    title: "Log Out",
    spacing: true,
    submenu: [],
  },
  // ... adicione mais registros conforme necessário
];

export default getMainMenus;