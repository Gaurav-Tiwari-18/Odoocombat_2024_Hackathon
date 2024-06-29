import Meter from "../../public/icons/meter.svg";
import WorkFlow from "../../public/icons/workflow.svg";
import Calender from "../../public/icons/calender.svg";
import SocialRM from "../../public/icons/social-network.svg";
import Analytic from "../../public/icons/analytic.svg";
import UserLead from "../../public/icons/user-lead.svg";
import UserStar from "../../public/icons/user-star.svg";
import Notification from "../../public/icons/notification.svg";
import Document from "../../public/icons/document.svg";
import DocumentChecked from "../../public/icons/document-checked.svg";
import Segment from "../../public/icons/segment.svg";
import { ColumnType, ProjectType, SideBarLinksType, TaskType } from "@/types";

export const SideBarLinks: SideBarLinksType[] = [
  {
    path: "/board",
    label: "dashboard",
    icon: Meter,
  },
  {
    path: "/board/workflow",
    label: "workflow",
    icon: WorkFlow,
  },
  {
    path: "/board/calender",
    label: "calender",
    icon: Calender,
  },
  {
    path: "/board/socialrm",
    label: "socialRM",
    icon: SocialRM,
  },

  // {
  //   path: "/board/leads",
  //   label: "leads",
  //   icon: UserLead,
  // },
  // {
  //   path: "/board/users",
  //   label: "users",
  //   icon: UserStar,
  // },
  {
    path: "/board/notifications",
    label: "notifications",
    icon: Notification,
  },
  {
    path: "/board/document",
    label: "Documents",
    icon: Document,
  },
  // {
  //   path: "/board/segments",
  //   label: "segments",
  //   icon: Segment,
  // },
];

export const Projects: ProjectType[] = [
  {
    id: "1",
    name: "Backend",
    color: `var(--electric-pink-color)`,
    icon: UserStar,
  },
  {
    id: "2",
    name: "Network",
    color: `var(--bright--yellow-color)`,
    icon: DocumentChecked,
  },
  {
    id: "3",
    name: "Devops",
    color: `var(--light-blue-color)`,
    icon: UserLead,
  },
  {
    id: "4",
    name: "Personal",
    color: `var(--cold-purple-color)`,
    icon: null,
  },
];

export const Tasks: TaskType[] = [
  {
    id: "1",
    title: "Database connection issues",
    status: "backlog",
    project: Projects[0],
    tags: [
      {
        name: "api.contactrm.com",
        color: `var(--peach-cream-color)`,
      },
      {
        name: "api.contactrm",
        color: `var(--pink-lace-color)`,
      },
    ],
    createdAt: "2024-06-20",
  },
  {
    id: "2",
    title: "Memory leaks in backend serv..",
    status: "backlog",
    project: Projects[0],
    tags: [
      {
        name: "api.contactrm.com",
        color: `var(--peach-cream-color)`,
      },
      {
        name: "api.contactrm",
        color: `var(--pink-lace-color)`,
      },
    ],
    createdAt: "2024-05-10",
  },
  {
    id: "3",
    title: "VLAN misconfiguration", 
    status: "backlog",
    project: Projects[1],
    createdAt: "2024-06-9",
  },
  {
    id: "4",
    title: "CI pipeline breaking",
    status: "backlog",
    project: Projects[2],
    createdAt: "2024-06-8",
  },
  {
    id: "5",
    title: "Issue with work Laptop",
    status: "todo",
    project: Projects[3],
    createdAt: "2024-06-14",
  },
  {
    id: "6",
    title: "Internet Conectivity issues",
    status: "going",
    project: Projects[0],
    tags: [
      {
        name: "api.contactrm.com",
        color: `var(--peach-cream-color)`,
      },
      {
        name: "api.contactrm",
        color: `var(--pink-lace-color)`,
      },
    ],
    createdAt: "2024-06-19",
  },
  {
    id: " 7",
    title: "Software Installation Request",
    status: "review",
    project: Projects[1],
    createdAt: "2024-05-12",
  },
  {
    id: "8",
    title: "Access to certain website bloc..",
    status: "review",
    project: Projects[1],
    createdAt: "2024-06-14",
  },
  {
    id: "9",
    title: "Shazam Client not responding",
    status: "done",
    project: Projects[0],
    tags: [
      {
        name: "api.contactrm.com",
        color: `var(--peach-cream-color)`,
      },
      {
        name: "api.contactrm",
        color: `var(--pink-lace-color)`,
      },
    ],
    createdAt: "2024-06-17",
  },
  {
    id: "10",
    title: "Email server issues",
    status: "done",
    project: Projects[1],
    createdAt: "2024-06-18",
  },
];

export const Columns: ColumnType[] = [
  {
    label: "Issues",
    value: "backlog",
  },
  {
    label: "To Do",
    value: "todo",
  },
  {
    label: "In Progress",
    value: "going",
  },
  {
    label: "Review",
    value: "review",
  },
  {
    label: "Done",
    value: "done",
  },
];
