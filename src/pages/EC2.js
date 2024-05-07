import React from "react";

const EC2 = () => {
  return (
    <div className="container">
      <h1>How to deploy node app on EC2</h1>
      <p>
        Deploying a Node.js application on Amazon EC2 involves several steps.
        Here's a general outline of the process:
      </p>
      <ol>
        <li>Set up an EC2 Instance:</li>
        <ul>
          <li>
            Sign in to the AWS Management Console and navigate to the EC2
            dashboard.
          </li>
          <li>
            Launch a new EC2 instance. Choose an Amazon Machine Image (AMI) that
            suits your requirements (such as Amazon Linux, Ubuntu, etc.).
          </li>{" "}
          <li>
            Configure the instance details, such as instance type, network
            settings, and storage.
          </li>
          <li>
            Create or use an existing key pair for SSH access to the instance
          </li>
        </ul>
        <li>Connect to your EC2 Instance:</li>
        <ul>
          <li>Once the instance is running, connect to it using SSH.</li>
          <li>
            Use the private key associated with your key pair to connect to the
            instance. For example:
          </li>
          <li>
            <code>
              ssh -i /path/to/private-key.pem ec2-user@your-instance-public-dns
            </code>
          </li>
        </ul>
        <li>Install Node.js and NPM:</li>
        <ul>
          <li>Update the package index</li>
          <li>
            <code>sudo apt update // For Ubuntu</code>
          </li>
          <li>Install Node.js and npm:</li>
          <li>
            <code>sudo apt install nodejs // For Ubuntu</code>
          </li>
          <li>Verify the installation</li>
          <li>
            <code>node -v</code>
          </li>
          <li>
            <code>npm -v</code>
          </li>
        </ul>
        <li>Install Dependencies and Configure your Application:</li>
        <ul>
          <li>
            <code>npm install</code>
          </li>
        </ul>
        <li>Run your application:</li>
        <ul>
          <li>
            Start your Node.js application. You might want to use a process
            manager like PM2 to keep your application running in the background
            and automatically restart it if it crashes:
          </li>
          <li>
            <code>pm2 start app.js</code>
          </li>
          <li>
            Alternatively, you can use a tool like forever to achieve similar
            results.
          </li>
        </ul>
      </ol>
    </div>
  );
};

export default EC2;
